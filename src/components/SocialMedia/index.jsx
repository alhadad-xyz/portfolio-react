import LinkApp from './LinkApp'

export function SocMedMobile() {
  return (
    <ul className="flex justify-center items-center gap-8 pb-4 pt-2">
        <LinkApp link="https://www.instagram.com/alhadad.xyz/" icon="./asset/icons/instagramW.svg" alt="instagram"/>
        <LinkApp link="https://twitter.com/alhadad_xyz" icon="./asset/icons/twitterW.svg" alt="twitter"/>
        <LinkApp link="https://www.facebook.com/al.hadad.94617" icon="./asset/icons/facebookW.svg" alt="facebook"/>
        <LinkApp link="https://www.github.com/alhadad-xyz" icon="./asset/icons/githubW.svg" alt="github"/>
        <LinkApp link="https://www.linkedin.com/in/al-hadad-b73038216" icon="./asset/icons/linkedinW.svg" alt="linkedin"/>
    </ul>
  ) 
}

export function SocMedDesktop() {
  return (
    <ul className="hidden lg:flex flex-col justify-evenly items-center w-full h-full">
        <LinkApp link="https://www.instagram.com/alhadad.xyz/" icon="./asset/icons/instagram.svg" alt="instagram"/>
        <LinkApp link="https://twitter.com/alhadad_xyz" icon="./asset/icons/twitter.svg" alt="twitter"/>
        <LinkApp link="https://www.facebook.com/al.hadad.94617" icon="./asset/icons/facebook.svg" alt="facebook"/>
        <LinkApp link="https://www.github.com/alhadad-xyz" icon="./asset/icons/github.svg" alt="github"/>
        <LinkApp link="https://www.linkedin.com/in/al-hadad-b73038216" icon="./asset/icons/linkedin.svg" alt="linkedin"/>
    </ul>
  ) 
}