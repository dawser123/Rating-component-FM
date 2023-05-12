import { useState } from 'react'
import ThankYou from './ThankYou'
import Card from '../UI/Card'
import classes from './Rating.module.css'
import Icon from '../assets/Icon.svg'
const Rating = () => {
	const [activeNumber, setActiveNumber] = useState(null)
	const [isActive, setIsActive] = useState(true)
	const clickHandler = number => {
		setActiveNumber(number)
	}
	const submitHandler = event => {
		event.preventDefault()
		setIsActive(false)
	}
	const arr = [1, 2, 3, 4, 5]
	const numbers = arr.map(number => (
		<button type="button" onClick={() => clickHandler(number)} key={number} className={classes.button}>
			{number}
		</button>
	))

	return (
		<Card>
			<form onSubmit={submitHandler}>
				{isActive ? (
					<div className={classes.main}>
						<img className={classes.icon} src={Icon} />
						<h1>How did we do?</h1>
						<p>
							Please let us know how we did with your support request. All feedback is appreciated to help us improve
							our
						</p>
						<div className={classes.buttons}>{numbers}</div>
						<button disabled={activeNumber === null} className={classes['submit-button']}>
							Submit
						</button>
					</div>
				) : (
					<ThankYou number={activeNumber} />
				)}
			</form>
		</Card>
	)
}

export default Rating
