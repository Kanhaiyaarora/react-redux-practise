import React, { useState } from 'react'

const App = () => {
  const data = [
    {
      question: "What is Reactjs",
      answer: "Reactjs is javascript library for making ui."
    },
    {
      question: "What is Reactjs",
      answer: "Reactjs is javascript library for making ui."
    },
    {
      question: "What is Reactjs",
      answer: "Reactjs is javascript library for making ui."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="min-h-screen flex flex-col items-center pt-10">

      {
        data.map((faq, index) => (
          <div key={index} className="w-[400px] border mb-3">

            <button
              onClick={() => {
                setOpenIndex(openIndex === index ? null : index)
              }}
              className="w-full p-4 bg-red-500 text-white text-left"
            >
              {faq.question}
            </button>

            {
              openIndex === index && (
                <p className="p-4 bg-gray-100">
                  {faq.answer}
                </p>
              )
            }

          </div>
        ))
      }

    </div>
  )
}

export default App