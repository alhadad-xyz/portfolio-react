function LinkApp({link, icon, alt}) {
    return (
      <li>
          <a href={link} target="_blank" rel="noreferrer"><img src={icon} alt={alt} className="transform hover:rotate-180 transition"/></a>
      </li>
    )
}

export default LinkApp