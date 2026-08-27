import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms",
  description: "Download Hektor - Creative Agency and Portfolio HTML Website Template that comes with rich features and well-commented code. Made by Themetorium.",
};

export default function ElementsFormsPage() {
  return (
    <>
      <div id="page-header" className="ph-full ph-full-m ph-center ph-cap-xxxlg ph-image-parallax ph-caption-parallax">

					
					
					

					
					
					

					
					
					
						
					
      					<div className="page-header-inner">

      						<div className="ph-caption">
      							<div className="ph-caption-inner">
      								<h2 className="ph-caption-subtitle">( Elements )</h2>
      								<h1 className="ph-caption-title">Forms</h1>
      								<div className="ph-caption-description max-width-700">
      									Pre-designed forms you can<br /> use to customize your website.
      								</div>
      							</div> 
      						</div>  

      					</div>
					

					
      					<div className="ph-social">

						
      						<div className="tt-social-buttons">
      							<ul>
      								<li><a href="https://www.facebook.com/themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-facebook-f"></i></a></li>
      								<li><a href="https://x.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-x-twitter"></i></a></li>
      								<li><a href="https://dribbble.com/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-dribbble"></i></a></li>
      								<li><a href="https://www.behance.net/Themetorium" className="tt-magnetic-item" target="_blank" rel="noopener"><i className="fa-brands fa-behance"></i></a></li>
      							</ul>
      						</div>
						

      					</div>
					

					
      					<div className="tt-scroll-down">
						
      						<a href="#tt-page-content" className="tt-sd-inner tt-magnetic-item" data-offset="0">
      							<div className="tt-sd-arrow">
      								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      									<path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
      								</svg>
      							</div>
      						</a>
      					</div>
					

      				</div>
				


				
      				<div id="tt-page-content">


					
      					<div className="tt-section padding-bottom-xlg-140">
      						<div className="tt-section-inner tt-wrap max-width-1600">

      							<div className="tt-row">
      								<div className="tt-col-xl-6 padding-right-xlg-40 margin-bottom-140 no-margin-xlg-bottom">

									
      									<div className="tt-heading margin-bottom-50 margin-bottom-xlg-80">
										
      										<h2 className="tt-heading-title tt-anim-characters">Classic Form</h2> 
      										<p className="max-width-400 tt-anim-lines">
      											You can use the classic form if you prefer a classic look.
      										</p>
      									</div>
									


									
      									<form className="tt-form">
      										<div className="tt-form-group">
      											<label>Name</label>
      											<input className="tt-form-control" id="665289" type="text" placeholder="Enter your name" />
      										</div>

      										<div className="tt-form-group">
      											<label>Email address</label>
      											<input className="tt-form-control" id="894236" type="email" placeholder="Enter your email" />
      											<small className="tt-form-text">We'll never share your email with anyone else.</small>
      										</div>

      										<div className="tt-form-group">
      											<label>Password</label>
      											<input className="tt-form-control" type="password" id="199238" placeholder="Enter password" />
      										</div>

      										<div className="tt-form-group">
      											<label>Disabled</label>
      											<input className="tt-form-control" id="396485" type="text" placeholder="Enter your name" disabled />
      										</div>

      										<div className="tt-form-group">
      											<label>Select</label>
      											<select className="tt-form-control" id="299634" required>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Multiple select</label>
      											<select className="tt-form-control" id="799437" size={5} multiple>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      												<option value="option-6">Option 6</option>
      												<option value="option-7">Option 7</option>
      												<option value="option-8">Option 8</option>
      												<option value="option-9">Option 9</option>
      												<option value="option-10">Option 10</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Message</label>
      											<textarea className="tt-form-control" id="399027" rows={6} placeholder="Enter your message"></textarea>
      										</div>

      										<div className="tt-form-file">
      											<label className="tt-btn tt-btn-outline btn-file tt-magnetic-item">
      												<span data-hover="Browse...">
      													Browse... <input type="file" multiple />
      												</span>
      											</label>
      											<input className="tt-file-info" type="text" readOnly />
      										</div>

      										<br />

      										<div className="tt-form-group">
      											<label>Vertical Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check">
      													<input type="checkbox" id="667293" defaultChecked />
      													<label htmlFor="667293">Check 1</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="556352" />
      													<label htmlFor="556352">Check 2</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="297400" disabled />
      													<label htmlFor="297400">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Vertical Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="324174" defaultChecked />
      													<label htmlFor="324174">Radio 1</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="856104" />
      													<label htmlFor="856104">Radio 2</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="781123" disabled />
      													<label htmlFor="781123">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="299403" defaultChecked />
      													<label htmlFor="299403">Check 1</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="897143" />
      													<label htmlFor="897143">Check 2</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="833510" disabled />
      													<label htmlFor="833510">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="098974" defaultChecked />
      													<label htmlFor="098974">Radio 1</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="299878" />
      													<label htmlFor="299878">Radio 2</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="345223" disabled />
      													<label htmlFor="345223">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<button type="submit" className="tt-btn tt-btn-secondary tt-magnetic-item">
											
      											<span data-hover="Submit">Submit</span>
      										</button>

      									</form>
									


      									<br />
      									<br />
      									<br />


									
      									<form className="tt-form">
      										<div className="tt-form-group">
      											<div className="tt-form-btn-inside">
      												<label htmlFor="992730">Newsletter</label>
      												<div className="tt-form-btn-inside-field">
      													<input className="tt-form-control" type="email" id="992730" placeholder="Enter your email address..." required />
      													<button type="submit"><i className="far fa-envelope"></i></button>
      												</div>
      												<small className="tt-form-text">Do not worry, we will not send spam.</small>
      											</div>
      										</div>
      									</form>
									

      								</div> 
							
      								<div className="tt-col-xl-6 padding-left-xlg-40">

									
      									<div className="tt-heading margin-bottom-50 margin-bottom-xlg-80">
										
      										<h2 className="tt-heading-title tt-anim-characters">Creative Form</h2> 
      										<p className="max-width-500 tt-anim-lines">
      											You can use the creative form if you prefer a more creative look. The tilted style and counter can be enabled or disabled.
      										</p>
      									</div>
									


									
      									<form className="tt-form tt-form-lg tt-form-creative tt-form-tilted tt-form-counter">
      										<div className="tt-form-group">
      											<label>Name</label>
      											<input className="tt-form-control" id="245377" type="text" placeholder="Enter your name" />
      										</div>

      										<div className="tt-form-group">
      											<label>Email address</label>
      											<input className="tt-form-control" id="198227" type="email" placeholder="Enter your email" />
      											<small className="tt-form-text">We'll never share your email with anyone else.</small>
      										</div>

      										<div className="tt-form-group">
      											<label>Password</label>
      											<input className="tt-form-control" type="password" id="453398" placeholder="Enter password" />
      										</div>

      										<div className="tt-form-group">
      											<label>Disabled</label>
      											<input className="tt-form-control" id="935118" type="text" placeholder="Enter your name" disabled />
      										</div>

      										<div className="tt-form-group">
      											<label>Select</label>
      											<select className="tt-form-control" id="889226" required>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Multiple select</label>
      											<select className="tt-form-control" id="938771" size={5} multiple>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      												<option value="option-6">Option 6</option>
      												<option value="option-7">Option 7</option>
      												<option value="option-8">Option 8</option>
      												<option value="option-9">Option 9</option>
      												<option value="option-10">Option 10</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Message</label>
      											<textarea className="tt-form-control" id="132554" rows={6} placeholder="Enter your message"></textarea>
      										</div>

      										<div className="tt-form-file">
      											<label className="tt-btn tt-btn-outline btn-file tt-magnetic-item">
      												<span data-hover="Browse...">
      													Browse... <input type="file" multiple />
      												</span>
      											</label>
      											<input className="tt-file-info" type="text" readOnly />
      										</div>

      										<br />

      										<div className="tt-form-group">
      											<label>Vertical Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check">
      													<input type="checkbox" id="288115" defaultChecked />
      													<label htmlFor="288115">Check 1</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="945487" />
      													<label htmlFor="945487">Check 2</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="733629" disabled />
      													<label htmlFor="733629">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Vertical Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="693452" defaultChecked />
      													<label htmlFor="693452">Radio 1</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="345683" />
      													<label htmlFor="345683">Radio 2</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="344251" disabled />
      													<label htmlFor="344251">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="373323" defaultChecked />
      													<label htmlFor="373323">Check 1</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="887656" />
      													<label htmlFor="887656">Check 2</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="011001" disabled />
      													<label htmlFor="011001">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="301029" defaultChecked />
      													<label htmlFor="301029">Radio 1</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="100938" />
      													<label htmlFor="100938">Radio 2</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="667654" disabled />
      													<label htmlFor="667654">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<button type="submit" className="tt-btn tt-btn-secondary tt-magnetic-item">
											
      											<span data-hover="Submit">Submit</span>
      										</button>

      									</form>
									


      									<br />
      									<br />
      									<br />


									
      									<form className="tt-form tt-form-creative tt-form-lg">
      										<div className="tt-form-group">
      											<div className="tt-form-btn-inside">
      												<label htmlFor="533892">Newsletter</label>
      												<div className="tt-form-btn-inside-field">
      													<input className="tt-form-control" type="email" id="533892" placeholder="Enter your email address..." required />
      													<button type="submit"><i className="far fa-envelope"></i></button>
      												</div>
      												<small className="tt-form-text">Do not worry, we will not send spam.</small>
      											</div>
      										</div>
      									</form>
									

      								</div> 
      							</div>

      						</div> 
      					</div>
					


					
      					<div className="tt-section padding-top-xlg-140 padding-bottom-xlg-140 border-top">
      						<div className="tt-section-inner tt-wrap max-width-1600">

      							<div className="tt-row">
      								<div className="tt-col-xl-6 padding-right-xlg-40 margin-bottom-140 no-margin-xlg-bottom">

									
      									<div className="tt-heading margin-bottom-50 margin-bottom-xlg-80">
										
      										<h2 className="tt-heading-title tt-anim-characters">Filled Form</h2> 
      										<p className="max-width-400 tt-anim-lines">
      											You can use the filled form if you prefer this look.
      										</p>
      									</div>
									


									
      									<form className="tt-form tt-form-filled">
      										<div className="tt-form-group">
      											<label>Name</label>
      											<input className="tt-form-control" id="667354" type="text" placeholder="Enter your name" />
      										</div>

      										<div className="tt-form-group">
      											<label>Email address</label>
      											<input className="tt-form-control" id="100328" type="email" placeholder="Enter your email" />
      											<small className="tt-form-text">We'll never share your email with anyone else.</small>
      										</div>

      										<div className="tt-form-group">
      											<label>Password</label>
      											<input className="tt-form-control" type="password" id="893345" placeholder="Enter password" />
      										</div>

      										<div className="tt-form-group">
      											<label>Disabled</label>
      											<input className="tt-form-control" id="778352" type="text" placeholder="Enter your name" disabled />
      										</div>

      										<div className="tt-form-group">
      											<label>Select</label>
      											<select className="tt-form-control" id="952341" required>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Multiple select</label>
      											<select className="tt-form-control" id="094452" size={5} multiple>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      												<option value="option-6">Option 6</option>
      												<option value="option-7">Option 7</option>
      												<option value="option-8">Option 8</option>
      												<option value="option-9">Option 9</option>
      												<option value="option-10">Option 10</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Message</label>
      											<textarea className="tt-form-control" id="556543" rows={6} placeholder="Enter your message"></textarea>
      										</div>

      										<div className="tt-form-file">
      											<label className="tt-btn tt-btn-outline btn-file tt-magnetic-item">
      												<span data-hover="Browse...">
      													Browse... <input type="file" multiple />
      												</span>
      											</label>
      											<input className="tt-file-info" type="text" readOnly />
      										</div>

      										<br />

      										<div className="tt-form-group">
      											<label>Vertical Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check">
      													<input type="checkbox" id="677599" defaultChecked />
      													<label htmlFor="677599">Check 1</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="243718" />
      													<label htmlFor="243718">Check 2</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="097897" disabled />
      													<label htmlFor="097897">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Vertical Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="564663" defaultChecked />
      													<label htmlFor="564663">Radio 1</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="889424" />
      													<label htmlFor="889424">Radio 2</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="399104" disabled />
      													<label htmlFor="399104">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="951053" defaultChecked />
      													<label htmlFor="951053">Check 1</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="903992" />
      													<label htmlFor="903992">Check 2</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="956554" disabled />
      													<label htmlFor="956554">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="622992" defaultChecked />
      													<label htmlFor="622992">Radio 1</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="095466" />
      													<label htmlFor="095466">Radio 2</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="005883" disabled />
      													<label htmlFor="005883">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<button type="submit" className="tt-btn tt-btn-secondary tt-magnetic-item">
											
      											<span data-hover="Submit">Submit</span>
      										</button>

      									</form>
									


      									<br />
      									<br />
      									<br />


									
      									<form className="tt-form tt-form-filled">
      										<div className="tt-form-group">
      											<div className="tt-form-btn-inside">
      												<label htmlFor="652298">Newsletter</label>
      												<div className="tt-form-btn-inside-field">
      													<input className="tt-form-control" type="email" id="652298" placeholder="Enter your email address..." required />
      													<button type="submit"><i className="far fa-envelope"></i></button>
      												</div>
      												<small className="tt-form-text">Do not worry, we will not send spam.</small>
      											</div>
      										</div>
      									</form>
									

      								</div> 
							
      								<div className="tt-col-xl-6 padding-left-xlg-40">

									
      									<div className="tt-heading margin-bottom-50 margin-bottom-xlg-80">
										
      										<h2 className="tt-heading-title tt-anim-characters">Minimal Form</h2> 
      										<p className="max-width-500 tt-anim-lines">
      											You can use the minimal form if you prefer a minimal look.
      										</p>
      									</div>
									


									
      									<form className="tt-form tt-form-minimal">
      										<div className="tt-form-group">
      											<label>Name</label>
      											<input className="tt-form-control" id="994563" type="text" placeholder="Enter your name" />
      										</div>

      										<div className="tt-form-group">
      											<label>Email address</label>
      											<input className="tt-form-control" id="228966" type="email" placeholder="Enter your email" />
      											<small className="tt-form-text">We'll never share your email with anyone else.</small>
      										</div>

      										<div className="tt-form-group">
      											<label>Password</label>
      											<input className="tt-form-control" type="password" id="993526" placeholder="Enter password" />
      										</div>

      										<div className="tt-form-group">
      											<label>Disabled</label>
      											<input className="tt-form-control" id="299844" type="text" placeholder="Enter your name" disabled />
      										</div>

      										<div className="tt-form-group">
      											<label>Select</label>
      											<select className="tt-form-control" id="388462" required>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Multiple select</label>
      											<select className="tt-form-control" id="886466" size={5} multiple>
      												<option value="" disabled selected>Please choose an option</option>
      												<option value="option-1">Option 1</option>
      												<option value="option-2">Option 2</option>
      												<option value="option-3">Option 3</option>
      												<option value="option-4">Option 4</option>
      												<option value="option-5">Option 5</option>
      												<option value="option-6">Option 6</option>
      												<option value="option-7">Option 7</option>
      												<option value="option-8">Option 8</option>
      												<option value="option-9">Option 9</option>
      												<option value="option-10">Option 10</option>
      											</select>
      										</div>

      										<div className="tt-form-group">
      											<label>Message</label>
      											<textarea className="tt-form-control" id="883667" rows={6} placeholder="Enter your message"></textarea>
      										</div>

      										<div className="tt-form-file">
      											<label className="tt-btn tt-btn-outline btn-file tt-magnetic-item">
      												<span data-hover="Browse...">
      													Browse... <input type="file" multiple />
      												</span>
      											</label>
      											<input className="tt-file-info" type="text" readOnly />
      										</div>

      										<br />

      										<div className="tt-form-group">
      											<label>Vertical Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check">
      													<input type="checkbox" id="869935" defaultChecked />
      													<label htmlFor="869935">Check 1</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="958836" />
      													<label htmlFor="958836">Check 2</label>
      												</div>
      												<div className="tt-form-check">
      													<input type="checkbox" id="488733" disabled />
      													<label htmlFor="488733">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Vertical Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="299016" defaultChecked />
      													<label htmlFor="299016">Radio 1</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="483398" />
      													<label htmlFor="483398">Radio 2</label>
      												</div>
      												<div className="tt-form-radio">
      													<input type="radio" name="radio1" id="003771" disabled />
      													<label htmlFor="003771">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Check List</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="895561" defaultChecked />
      													<label htmlFor="895561">Check 1</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="927783" />
      													<label htmlFor="927783">Check 2</label>
      												</div>
      												<div className="tt-form-check tt-form-check-inline">
      													<input type="checkbox" id="355263" disabled />
      													<label htmlFor="355263">Check 3</label>
      												</div>
      											</div>
      										</div>

      										<div className="tt-form-group">
      											<label>Horizontal Radio Buttons</label>
      											<div className="tt-form-group-inner">
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="299375" defaultChecked />
      													<label htmlFor="299375">Radio 1</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="386647" />
      													<label htmlFor="386647">Radio 2</label>
      												</div>
      												<div className="tt-form-radio tt-form-radio-inline">
      													<input type="radio" name="radio2" id="498867" disabled />
      													<label htmlFor="498867">Radio 3</label>
      												</div>
      											</div>
      										</div>

      										<button type="submit" className="tt-btn tt-btn-secondary tt-magnetic-item">
											
      											<span data-hover="Submit">Submit</span>
      										</button>

      									</form>
									


      									<br />
      									<br />
      									<br />


									
      									<form className="tt-form tt-form-minimal">
      										<div className="tt-form-group">
      											<div className="tt-form-btn-inside">
      												<label htmlFor="277143">Newsletter</label>
      												<div className="tt-form-btn-inside-field">
      													<input className="tt-form-control" type="email" id="277143" placeholder="Enter your email address..." required />
      													<button type="submit"><i className="far fa-envelope"></i></button>
      												</div>
      												<small className="tt-form-text">Do not worry, we will not send spam.</small>
      											</div>
      										</div>
      									</form>
									

      								</div> 
      							</div>

      						</div> 
      					</div>
					


      				</div>
    </>
  );
}
