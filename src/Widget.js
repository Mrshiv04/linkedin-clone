import React from 'react';
import './Widget.css';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
	const newsArticle = (heading, subtitle) => (
		<div className='widget_article'>
			<div className='widget_articleLeft'>
				<FiberManualRecordIcon />
			</div>
			<div className='widget_articleRight'>
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
	);

	return (
		<div className='widget'>
			<div className='widget_header'>
				<h2>LinkedIn news</h2>
				<InfoOutlinedIcon />
			</div>
			{newsArticle(
				'Why women drop out of the workforce',
				'1d ago . 1,080 readers'
			)}
			{newsArticle('India loves affair with biryani', '1d ago . 1,760 readers')}
			{newsArticle('India loves affair with biryani', '1d ago . 1,760 readers')}
			{newsArticle('Hey Siri, start my car', '1d ago . 8,406 readers')}
			{newsArticle('Agility is works new superpower', '9d ago')}
			{newsArticle(
				'Pubg launch may delay by months',
				'1d ago . 10,213 readers'
			)}
			{newsArticle('Farmers Strike continues, whats next?', '1,234 readers')}
			{newsArticle('Covid19 2.0?', '2d ago')}
		</div>
	);
}

export default Widget;
