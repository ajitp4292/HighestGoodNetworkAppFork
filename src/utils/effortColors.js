import _ from 'lodash'
export const getcolor = effort => {
	let color = 'purple'
	if (_.inRange(effort, 0, 5)) color = 'red'
	if (_.inRange(effort, 5, 10)) color = 'orange'
	if (_.inRange(effort, 10, 20)) color = 'green'
	if (_.inRange(effort, 20, 30)) color = 'blue'
	if (_.inRange(effort, 30, 40)) color = 'indigo'
	if (_.inRange(effort, 40, 50)) color = 'violet'
	return color
}

export const getprogress = effort => {
	let progress = 92
	if (_.inRange(effort, 0, 5)) progress = 0
	if (_.inRange(effort, 5, 10)) progress = 10
	if (_.inRange(effort, 10, 20)) progress = 20
	if (_.inRange(effort, 20, 30)) progress = 45
	if (_.inRange(effort, 30, 40)) progress = 60
	if (_.inRange(effort, 40, 50)) progress = 80
	return progress
}

export default getcolor
