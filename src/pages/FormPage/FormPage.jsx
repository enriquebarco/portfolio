import React, { useEffect } from 'react'
import Form from '../../components/Form/Form';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import "./FormPage.scss";

export default function FormPage() {
  
  useEffect(() => {
    document.title = "Contact Me"
  })

  return (
    <main className="form-page">
        <PageHeader />
        <Form />
    </main>
  )
}
