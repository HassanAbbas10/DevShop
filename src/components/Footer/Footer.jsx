const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto flex justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold">Your Company</h1>
          <p>1234 Street, City, State, Country</p>
        </div>
        <div>
          <a href="#" className="text-blue-400 hover:text-blue-500">About Us</a>
          <a href="#" className="ml-4 text-blue-400 hover:text-blue-500">Contact</a>
          <a href="#" className="ml-4 text-blue-400 hover:text-blue-500">Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}
export default Footer
