import Container from "../atoms/Container";
import Footer from "../molecules/layout/Footer";
import Header from "../molecules/layout/Header";


interface Props {
  children: React.ReactNode;
}


const Frame = ({ children }: Props) => {
  return (
    <>
      {/* Header */} 
      <Header/>

      {/* Main */}
      <main>
           {children}
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default Frame;