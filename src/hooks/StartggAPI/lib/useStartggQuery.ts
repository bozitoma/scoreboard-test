export const useStartggQuery = () => {
  const TournamentQuery = `
    query StreamQueueOnTournament($tourneySlug: String!) {
    tournament(slug: $tourneySlug) {
        streamQueue {
            stream {
                streamName
            }
            sets {
                slots {
                    entrant {
                        id
                        name
                        initialSeedNum
                        participants{
                          gamerTag
                          prefix
                          user{
                            authorizations(
                                types : TWITTER
                              ){
                                externalUsername
                              }
                            bio
                            birthday
                            location{
                              city
                              country
                              state
                            }
                          }
                          player{
                            recentStandings(videogameId: 1386, limit: 5){
                              standing
                              entrant{
                                event{
                                  numEntrants
                                  tournament{
                                    name
                                  }
                                }
                              }
                            }
                              rankings(limit: 3, videogameId:1386 ){
                                rank
                                title
                            }
                          }
                        }
                        paginatedSets(page:1, perPage:30) {
                            nodes {
                                id
                                identifier
                                phaseGroup {
                                    phase {
                                        name
                                    }
                                }
                                fullRoundText
                                slots {
                                    entrant{
                                      name
                                    }

                                    standing {
                                        stats {
                                            score {
                                                value
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
      }
    }`;

  const BracektQuery = `
    query PhaseGroupSets($phaseGroupId: ID!){
      phaseGroup(id:$phaseGroupId){
        phase {
          name
        }
        sets(
          page: 1
          perPage: 16
          sortType: ROUND
        ){
          nodes{
            id
            identifier
            fullRoundText
            slots{
              entrant{
                id
                name
                participants {
                  player {
                    id
                    prefix
                    gamerTag
                  }
                }
              }
              standing {
                placement
                stats {
                  score {
                    value
                  }
                }
              }
            }
          }
        }
      }
    }`;

  const RoundInfoChange: { [key: string]: string } = {
    "Grand Final Reset": "Grand Finals",
    "Grand Final": "Grand Finals",
    "Winners Final": "Winners Finals",
    "Winners Semi-Final": "Winners Semis",
    "Winners Quarter-Final": "Winners Quarters",
    "Losers Final": "Losers Finals",
    "Losers Semi-Final": "Losers Semis",
    "Losers Quarter-Final": "Losers Quarters",
  };

  const streamQueueQuery = `
query StreamQueueOnTournament($tourneySlug: String!, $eventSlug: String!) {
  tournament(slug: $tourneySlug) {
    id
    startAt
    streamQueue {
      stream {
        streamSource
        streamName
      }
      sets {
        id
        fullRoundText
        state
        lPlacement
        wPlacement
        slots {
          entrant {
            name
            participants {
                gamerTag
                prefix
                user {
                    authorizations (types: [TWITTER]) {
                    externalUsername
                }
              }
            }
          }
        }
      }
    }
  }
  event(slug: $eventSlug) {
    sets(perPage: 50, filters: {state: [1, 2], hideEmpty: true}) {
      pageInfo {
        totalPages
        total
      }
      nodes {
        id
        fullRoundText
        lPlacement
        wPlacement
        state
        slots {
          entrant {
            name
            participants {
                gamerTag
                prefix
                user {
                    authorizations (types: [TWITTER]) {
                    externalUsername
                }
              }
            }
          }
        }
      }
    }
  }
    }`;

  const nextQuery = `
query StreamQueueOnTournament($eventSlug: String!, $page: Int!) {
  event(slug: $eventSlug) {
    sets(perPage: 50, page: $page, filters: {state: [1, 2], hideEmpty: true}) {
      pageInfo {
        totalPages
        total
      }
      nodes {
        id
        fullRoundText
        lPlacement
        wPlacement
        state
        slots {
          entrant {
            name
            participants {
                gamerTag
                prefix
                user {
                    authorizations (types: [TWITTER]) {
                    externalUsername
                }
              }
            }
          }
        }
      }
    }
  }
  }`;
  return {
    TournamentQuery,
    BracektQuery,
    RoundInfoChange,
    streamQueueQuery,
    nextQuery,
  };
};
