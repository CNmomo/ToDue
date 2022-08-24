import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const changeMonth2Number = (month) => {
	switch (month) {
		case 'Jan': return 1;
		case 'Feb': return 2;
		case 'Mar': return 3;
		case 'Apr': return 4;
		case 'May': return 5;
		case 'Jun': return 6;
		case 'Jul': return 7;
		case 'Aug': return 8;
		case 'Sep': return 9;
		case 'Oct': return 10;
		case 'Nov': return 11;
		case 'Dec': return 12;
		default: return 0;
	}
}
const changeDay2Hangul = (day) => {
	switch (day) {
		case 'Mon': return '월요일';
		case 'Tue': return '화요일';
		case 'Wed': return '수요일';
		case 'Thu': return '목요일';
		case 'Fri': return '금요일';
		case 'Sat': return '토요일';
		case 'Sun': return '일요일';
		default: return 0;
	}
}

const Date = () => {
	const defaultScreen = useSelector(state => state.screenSetter.value)

	let timeID = useSelector(state => state.timer.value)

	let month = changeMonth2Number(timeID[1]);
	let date = timeID[2];
	let day = changeDay2Hangul(timeID[0]);

	return (
		<View style={styles.body}>
			<Text style={styles.date}>{month} / {date}</Text>
			<Text style={styles.day}>{day}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	body:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	date:{
		fontWeight: 'bold',
		fontSize: 40,
		color:'#000000',
	},
	day:{
		fontSize: 16,
		color: '#3D3D3D',
	},
})

export default Date;
