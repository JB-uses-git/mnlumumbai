import { FaChevronDown } from 'react-icons/fa'
import './TubelightNavbar.css'

const TubelightNavbar = ({ items = [], activeItem = '' }) => {
	return (
		<div className="tubelight-navbar-wrapper">
			<div className="navbar-brand">
				<img src="/images/calstar-logo.svg" alt="CALSTAR" className="navbar-logo-img" />
				<div className="navbar-brand-text">
					<h2>CALSTAR</h2>
					<div className="navbar-tagline">Centre for Advanced Legal Studies</div>
				</div>
			</div>

			<div className="tubelight-navbar">
				<div className="tubelight-navbar-container">
					{items.map((item, idx) => {
						const Icon = item.icon
						const isActive = item.name === activeItem
						const hasDropdown = item.subItems && item.subItems.length > 0
						return (
							<div key={idx} className="tubelight-nav-item-wrapper">
								<button
									className={`tubelight-nav-item ${isActive ? 'active' : ''}`}
									onClick={item.onClick}
									type="button"
									aria-current={isActive ? 'page' : undefined}
								>
									{Icon && <Icon className="nav-item-icon" />}
									<span className="nav-item-text">{item.name}</span>
									{hasDropdown && <FaChevronDown className="nav-item-chevron" />}
									{isActive && <span className="tubelight-lamp" aria-hidden />}
								</button>
								{item.subItems && (
									<div className="tubelight-dropdown">
										{item.subItems.map((subItem, subIdx) => (
											<button
												key={subIdx}
												className="tubelight-dropdown-item"
												onClick={(e) => {
													e.stopPropagation()
													subItem.onClick && subItem.onClick()
												}}
											>
												{subItem.name}
											</button>
										))}
									</div>
								)}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default TubelightNavbar
