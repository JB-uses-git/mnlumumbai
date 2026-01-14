import React from 'react'
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
						return (
							<button
								key={idx}
								className={`tubelight-nav-item ${isActive ? 'active' : ''}`}
								onClick={item.onClick}
								type="button"
								aria-current={isActive ? 'page' : undefined}
							>
								{Icon && <Icon className="nav-item-icon" />}
								<span className="nav-item-text">{item.name}</span>
								{isActive && <span className="tubelight-lamp" aria-hidden />}
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default TubelightNavbar
