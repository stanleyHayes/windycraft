import {Link} from "@mui/material";
import {Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const SocialLink = ({account}) => {

    return (
        <Link href={account.link}>
            {account.platform === 'facebook' ? (
                <Facebook/>
            ) : account.platform === 'linkedin' ? (
                <LinkedIn/>
            ) : account.platform === 'twitter' ? (
                <Twitter/>
            ) : <Instagram/>}
        </Link>
    )
}

export default SocialLink;
