const APIKEY = "414a1b7421c79a44b093553f67717d30";

const requests = {
  football: {
    eflchamp: `/?sport=soccer_efl_champ&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    eflleague: `/?sport=soccer_england_league1&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    eflleague2: `/?sport=soccer_england_league2&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    epl: `/?sport=soccer_epl&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    fa: `/?sport=soccer_fa_cup&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    france: `/?sport=soccer_france_ligue_one&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,

    AFncaaf: `/?sport=americanfootball_ncaaf&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    AFnfl: `/?sport=americanfootball_nfl&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
    afl: `/?sport=aussierules_afl&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
  },

  basketball: {
    euroleague: `/?sport=basketball_euroleague&region=us&mkt=h2h&dateFormat=iso&apiKey=${APIKEY}`,
  },
};

export default requests;
