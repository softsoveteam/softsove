import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Download Hektor - Creative Agency and Portfolio HTML Website Template that comes with rich features and well-commented code. Made by Themetorium.",
};

export default function NotFound() {
  return (
    <>
      <div id="tt-page-content">


					
      					<div className="tt-section no-padding">
      						<div className="tt-section-inner tt-wrap">

      							<div className="tt-404-error">
      								<h2 className="tt-404-error-subtitle">( 404 Error )</h2>
      								<h1 className="tt-404-error-title">Oops!</h1>
      								<div className="tt-404-error-description">Something went wrong.<br /> This page could not be found.</div>
      								<a href="/" className="tt-btn tt-btn-accent margin-top-40 tt-magnetic-item">
      									<span data-hover="Home Page">Home Page</span>
      								</a>
      							</div>

      						</div> 
      					</div>
					


      				</div>
    </>
  );
}
