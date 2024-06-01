import React, { useState } from 'react';

import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

interface Props {
  onClick: () => void
}

const Like = ({onClick}:Props) => {

  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked);
    onClick();
  }

  if (isLiked) {
    return <BsHeartFill size={80} onClick={handleLike} color='#ff6b81'/>
  }else {
    return <BsHeart size={80} onClick={handleLike}/>
  }
}

export default Like