import cl from "./Section.module.css"

const Section = ({ title, children }) => {
  return (<section className={cl.section}>{children}</section>)
};

export default Section;
