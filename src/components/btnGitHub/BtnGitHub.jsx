import './BtnGitHub.css'
import gitHubLink from './gitHub-black.svg';

export default function BtnGitHub ({link}) {
    return (
        <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
            <img src={gitHubLink} alt="" />
            GitHub repo
        </a>
    )
}