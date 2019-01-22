const express           = require('express');
const config            = require('../../config');
const { Kayn, REGIONS } = require('kayn');
const kayn              = Kayn(config.API_KEY)();

// Create an instance of the express router
const router  = express.Router(); 

router.get('/', (req, res, next) => {
    let summonerNameQuery = req.query.summonerName;
    let region = req.query.region;

    console.log(summonerNameQuery + ', ' + region);

    main(kayn);


    function main(kayn){
        kayn.SummonerV4.by.name(summonerNameQuery).callback(function(err, summoner){
            kayn.LeaguePositionsV4.by.summonerID(summoner.id).callback(function(err, leagueInfo){
                kayn.MatchlistV4.by.accountID(summoner.accountId).callback(function(err, matchList){
                    res.render('summoner', {
                        summonerInfo: summoner,
                        leagueInfo: leagueInfo,
                        matchListInfo: matchList.matches
                    });
                });
            });
        });
    }
});

module.exports = router;