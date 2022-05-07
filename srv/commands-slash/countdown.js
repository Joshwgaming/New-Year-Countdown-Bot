const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('countdown')
		.setDescription('See how long until the new year!'),
	async execute(interaction, MessageEmbed) {
		const newYearDate = `December 31 ${new Date().getFullYear()} 23:59:59`;

		function getTimeRemaining(endtime){
			const total = Date.parse(endtime) - Date.parse(new Date());
			const seconds = Math.floor( (total / 1000) % 60 );
			const minutes = Math.floor( (total / 1000 / 60) % 60 );
			const hours = Math.floor( (total / (1000 * 60 * 60)) % 24 );
			const days = Math.floor( total / (1000 * 60 * 60 * 24) );
		  
			return {
			  total,
			  days,
			  hours,
			  minutes,
			  seconds
			};
		  }

		const { days, hours, minutes, seconds } = getTimeRemaining(newYearDate);

        const countdownEmbed = new MessageEmbed()
            .setTitle('🎉 New Year Countdown 🎉')
            .setDescription(`It is: ${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds until ${new Date().getFullYear() + 1} begins!`)
            .setTimestamp()
            .setColor('ff6666')
        await interaction.reply({ embeds: [countdownEmbed] })
	},
};
