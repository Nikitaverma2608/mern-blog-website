import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";



export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500" >
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className="self-center whitespace-nowrap text-lg 
        sm:text-xl font-semibold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Nicks Blog  </span>
            
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title ='About' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='http://www.100jsprojects.com' target="_blank" rel="noopener noreferrer">
                      100 JS Projects
                    </Footer.Link>
                    <Footer.Link href='/about' target="_blank" rel="noopener noreferrer">
                      Nicks Blog
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title ='Follw us' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='https://github.com/Nikitaverma2608' target="_blank" rel="noopener noreferrer">
                      Github
                    </Footer.Link>
                    <Footer.Link href='https://www.linkedin.com/in/nikita-verma-98a9b9215/' >
                      LinkedIn
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title ='Legal' />
                  <Footer.LinkGroup col>
                    <Footer.Link href='#' >
                      Privacy policy
                    </Footer.Link>
                    <Footer.Link href='#' >
                      Terms &amp; Conditions
                    </Footer.Link>
                  </Footer.LinkGroup>
                </div>
                  
                </div>
            </div>
            <Footer.Divider/>
            <div className="">
              <Footer.Copyright href="#" by="Nicks Blog" year={new Date().getFullYear()}/>
              
          
          </div>
            

        </div>
    </Footer>
  )
}
