import React, {useState} from 'react'
import { Configuration, OpenAIApi } from 'openai';
import PageHeader from '../../components/PageHeader/PageHeader';
import astro from "../../assets/images/astro.png";
import meditate from "../../assets/icons/meditate.jpeg"
import avatar1 from "../../assets/images/avatar1.jpeg";
import avatar2 from "../../assets/images/avatar2.jpeg";
import avatar3 from "../../assets/images/avatar3.jpeg";
import './CollaborationPrompt.scss';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);



function CollaborationPrompt() {
  const [dalle, setDalle] = useState();
  const [description, setDescription] = useState();
  const [isFrozen, setIsFrozen] = useState(false);
  
  const fetchDalle = async () => {
    setIsFrozen(true);
    if (description) {
      const response = await openai.createImage({
        prompt: `${description} digital art`,
        n: 1,
        size: "512x512",
      }).catch(err => alert(err))
      setDalle(response.data.data[0].url);
      setIsFrozen(false);
    }
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  }

  const placeholderText = 'Lets create a thought together, guess what I am thinking about?'


  return (
    <>
      <PageHeader />
      <section className="prompt">
        <div className="promt__thought-container">
          <div className="prompt__thought">
            <img className="prompt__image" src={dalle ? dalle : astro} alt={description ? description : 'my nft'} />
          </div>
        </div>
        <div className="prompt__container">
          <img src={avatar1} alt="" className="prompt__avatar" />
          <textarea placeholder={placeholderText} type='text' id='prompt' name='prompt' onChange={handleDescriptionChange} className="prompt__text" />
          <button className="prompt__button" onClick={!isFrozen && fetchDalle}>Think</button>
        </div>
      </section>
    </>
  )
}

export default CollaborationPrompt;