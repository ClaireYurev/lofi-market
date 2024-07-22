const useUserAddress = async () => {
    let address = {}
    let response = await fetch("/api/address/get") // Ensure this API route returns the user's address
  
    if (response.ok) {
      let data = await response.json()
      address = data
    }
  
    return address
  }
  
  export default useUserAddress
  