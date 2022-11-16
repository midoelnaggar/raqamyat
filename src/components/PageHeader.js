import "../styles/PageHeader.css";

function PageHeader({ title, breadcrumbs }) {
  return (
    <div className="page_header">
      <div className="page_title">
        {title}
      </div>
      <div className="breadcrumbs">
        {breadcrumbs}
      </div>
    </div>
  );
}

export default PageHeader;
