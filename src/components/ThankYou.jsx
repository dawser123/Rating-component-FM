import React from 'react'
import Container from '../UI/Card'
import classes from './ThankYou.module.css'
import ThankYouIcon from '../assets/ThankYou.svg'

const ThankYou = props => {
	const number = props.number
	return (
		<Container>
			<div className={classes['thank-you']}>
				<img className={classes.img} src={ThankYouIcon} />
				<p className={classes['selected-rating']}>You selected {number} out of 5</p>
				<h2>Thank you!</h2>
				<p>
					We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
					touch!
				</p>
			</div>
		</Container>
	)
}

export default ThankYou
