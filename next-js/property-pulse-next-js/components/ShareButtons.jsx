"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const ShareButtons = ({ property }) => {
  if (!property || !property._id) {
    return <div>No property data available for sharing</div>;
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-center pt-2">
        Share This Property
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton
          url={shareUrl}
          quote={property.name}
          hashtag={`#${property.type.replace(/\s/g, "")}ForRent`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={property.name}
          hashtags={[`${property.type.replace(/\s/g, "")}ForRent`]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          title={property.name}
          separator="::"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Look at this property I found!: ${shareUrl.url}`}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;
