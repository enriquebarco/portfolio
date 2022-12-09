import React, {useState, useEffect} from 'react'
import { Configuration, OpenAIApi } from 'openai';
import placeholder from "../../assets/images/kitesurf1.jpeg"
import './CollaborationPrompt.scss';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);



function CollaborationPrompt() {
  const [dalle, setDalle] = useState();
  const [description, setDescription] = useState();
  
  const fetchDalle = async () => {
    if (description) {
      const response = await openai.createImage({
        prompt: `${description} digital art`,
        n: 1,
        size: "512x512",
      })
      setDalle(response.data.data[0].url);
    }
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  }

  console.log(description);

  // useEffect(() => {
  //   fetchDalle().catch(console.error)
  // },[])

  // console.log('state', dalle)


  return (
    <section className="prompt">
      <div className="prompt__thought">
        <img className="prompt__image" src={dalle} alt="" />
      </div>
      <input type='text' id='prompt' name='prompt' onChange={handleDescriptionChange} className="prompt__text" />
      <button onClick={fetchDalle}>think</button>
    </section>
  )
}

export default CollaborationPrompt