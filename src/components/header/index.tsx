import HeaderPage from '@/components/HeaderPage'
import fetchData from '@/app/fetchData'
const Header = async() => {
const basic_details= await fetchData('basic-details')
console.log('vasic details &&&&&&&&&&&&&&&&&&',basic_details)
  return (
    <>
     <HeaderPage basic_details={basic_details} />
    </>
  );
};

export default Header;
