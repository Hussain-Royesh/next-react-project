import { Form } from "react-router-dom";

async function submitForm(formData){
  "use server"
  const formFields ={email:formData.get("email"),
     message:formData.get("message")};
     console.log("formFields",formFields);
     console.log("TODO: submit to database or email service");
     return formFields;
};



export default function Home(){



    return (

<main className="max-w-xl mx-auto pt-20 px-6 text-center text-blue-200">
  <h1 className="bg-white text-black border-2 rounded-2xl p-4 mb-6">
    Course Registration Form
  </h1>

  <form className="bg-gray-800 p-6 rounded-2xl shadow-lg" action={submitForm}>
    {/* Email */}
    <div className="mb-4 text-left">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-white mb-2"
      >
        Email <span className="text-red-500">*</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Write your email"
        className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
      />
    </div>

    {/* Message */}
    <div className="mb-4 text-left">
      <label
        htmlFor="message"
        className="block text-sm font-medium text-white mb-2"
      >
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Write your message"
        rows="4"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
      />
    </div>

    {/* Submit button */}
    <button
      type="submit"
      className="w-full py-2 px-4 bg-green-300 text-black font-semibold rounded-md shadow-md hover:bg-green-400 transition"
    >
      Submit
    </button>
  </form>
</main>

        
        
  
    )
}