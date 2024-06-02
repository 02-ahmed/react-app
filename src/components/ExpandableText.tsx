import React, { useState } from 'react'

interface Props {
  children: string;
  maxChars?:number
}

const ExpandableText = ({children, maxChars=100}:Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summarisedText = isExpanded ? children:children.substring(0, maxChars);

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  if (children.length <= maxChars) {
    return <p>{children}</p>
  }else {
    return <p>{summarisedText} ... <button onClick={handleClick}>{isExpanded? 'Less':'More'}</button></p>
  }

  
}

export default ExpandableText