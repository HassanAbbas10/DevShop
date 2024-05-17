import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //for api call 🎃
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-start bg-white">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Contact us</h1>
        <p className="mt-3"> message us here for any query:</p>

        <form action="www.ok.com" className="mt-10" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative z-0">
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your name
              </label>
            </div>
            <div className="relative z-0">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                Your message
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-md bg-orange-400  px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="name" className="block mb-2">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="message" className="block mb-2">
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
