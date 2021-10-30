import React from "react";
import {
  TwitterOutlined,
  LinkedinOutlined,
  MailOutlined,
  DownloadOutlined
} from '@ant-design/icons';

const About = () => {
  return (
    <div className="m-18 xl:space-y-40 2xl:space-y-96">
       <div className="flex justify-center">
          <h2 className="about-head text-xl m-5 mt-2 md:mt-8 md:m-0 md:text-3xl lg:text-5xl w-full md:w-4/6 text-left leading-relaxed">
            Hi, I'm Israel Akinpelu, a Motion and graphics designer specializing in UI and UX. 
          </h2>
       </div>
          <h2 className="block md:hidden text-sm ml-10 mt-2 w-3/4 text-left leading-loose about-text">
            Crafting digital storytelling and visual experience that makes the product and 
            brand work with strong leadership and analytical skills in Computer Engineering.
            With experience working with cross platform projects and designing user-friendly products.
          </h2>
        <div className="flex justify-between ml-10 mb-5 md:-ml-10 md:grid md:grid-cols-2 md:gap-4 mt-5 md:items-center justify-items-center w-3/4 md:w-full">
          <div className="flex items-center space-x-5">
            <div>
              <DownloadOutlined style={{fontSize: "25px"}} />
            </div>
            <h5 className="hidden md:block">View my CV</h5>
          </div>
          <div className="flex items-center space-x-5">
            <div><TwitterOutlined style={{fontSize: "25px"}} /></div>
            <h5 className="w-full text-left hidden md:block mt-16">As you may have guessed my name is Israel, I'm a freelance motion and graphics designer
            crafting digital storytelling and visual experience that makes the product and 
            brand work with strong leadership and analytical skills in Computer Engineering.
            </h5>
          </div>
          <div className="flex items-center space-x-5 opacity-100 ml-4 -mt-3">
            <div><MailOutlined style={{fontSize: "25px"}} /></div>
            <h5 className="hidden md:block">Send me a mail</h5>
          </div>
          <div className="flex items-center space-x-5">
            <div><LinkedinOutlined style={{fontSize: "25px"}} /></div>
            <h5 className="w-full text-left hidden md:block -mt-4">With experience working with cross platform projects and designing user-friendly products.</h5>
          </div>
        </div>
    </div>
  )
}

export default About;