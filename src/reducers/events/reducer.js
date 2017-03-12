import _ from 'lodash';
// var uuid = require('react-native-uuid');

import {
  ADD_EVENT,
  REMOVE_EVENT
} from './actionTypes';

const initialState =
  {
    schedule: [
      {"name":"The Lemon Twigs","short":"lemont(1)","start":"2017-04-14 14:45","end":"2017-04-14 15:15","stage":"Coachella"},
      {"name":"The Interrupters","short":"interr(1)","start":"2017-04-14 15:40","end":"2017-04-14 16:15","stage":"Coachella"},
      {"name":"Capital Cities","short":"capita(1)","start":"2017-04-14 16:40","end":"2017-04-14 17:30","stage":"Coachella"},
      {"name":"Mac DeMarco","short":"macdem(1)","start":"2017-04-14 17:55","end":"2017-04-14 18:45","stage":"Coachella"},
      {"name":"Father John Misty","short":"father(1)","start":"2017-04-14 19:10","end":"2017-04-14 20:00","stage":"Coachella"},
      {"name":"Travis Scott","short":"travis(1)","start":"2017-04-14 20:25","end":"2017-04-14 21:15","stage":"Coachella"},
      {"name":"The xx","short":"xx(1)","start":"2017-04-14 21:40","end":"2017-04-14 22:30","stage":"Coachella"},
      {"name":"Radiohead","short":"radioh(1)","start":"2017-04-14 23:00","end":"2017-04-15 01:00","stage":"Coachella"},
      {"name":"Blossoms","short":"blosso(1)","start":"2017-04-15 13:40","end":"2017-04-15 14:30","stage":"Coachella"},
      {"name":"Arkells","short":"arkell(1)","start":"2017-04-15 14:55","end":"2017-04-15 15:45","stage":"Coachella"},
      {"name":"Local Natives","short":"localn(1)","start":"2017-04-15 16:10","end":"2017-04-15 17:00","stage":"Coachella"},
      {"name":"Gucci Mane","short":"guccim(1)","start":"2017-04-15 17:25","end":"2017-04-15 18:15","stage":"Coachella"},
      {"name":"Two Door Cinema Club","short":"twodoo(1)","start":"2017-04-15 18:40","end":"2017-04-15 19:30","stage":"Coachella"},
      {"name":"Martin Garrix","short":"martin1(1)","start":"2017-04-15 19:55","end":"2017-04-15 20:50","stage":"Coachella"},
      {"name":"Bon Iver","short":"bonive(1)","start":"2017-04-15 21:15","end":"2017-04-15 22:15","stage":"Coachella"},
      {"name":"Lady Gaga","short":"ladyga(1)","start":"2017-04-15 22:50","end":"2017-04-16 01:00","stage":"Coachella"},
      {"name":"Los Blenders","short":"blende(1)","start":"2017-04-16 13:30","end":"2017-04-16 14:10","stage":"Coachella"},
      {"name":"Allah-Las","short":"allahl(1)","start":"2017-04-16 14:35","end":"2017-04-16 15:25","stage":"Coachella"},
      {"name":"Real Estate","short":"reales(1)","start":"2017-04-16 15:50","end":"2017-04-16 16:40","stage":"Coachella"},
      {"name":"Future Islands","short":"future1(1)","start":"2017-04-16 17:05","end":"2017-04-16 17:55","stage":"Coachella"},
      {"name":"Justice","short":"justic(1)","start":"2017-04-16 19:25","end":"2017-04-16 20:15","stage":"Coachella"},
      {"name":"Lorde","short":"lorde(1)","start":"2017-04-16 20:40","end":"2017-04-16 21:40","stage":"Coachella"},
      {"name":"Oh Wonder","short":"ohwond(1)","start":"2017-04-14 16:00","end":"2017-04-14 16:50","stage":"Outdoor Theatre"},
      {"name":"Banks","short":"banks(1)","start":"2017-04-14 17:15","end":"2017-04-14 18:05","stage":"Outdoor Theatre"},
      {"name":"Little Dragon","short":"little(1)","start":"2017-04-14 18:30","end":"2017-04-14 19:20","stage":"Outdoor Theatre"},
      {"name":"Bonobo","short":"bonobo(1)","start":"2017-04-14 19:45","end":"2017-04-14 20:35","stage":"Outdoor Theatre"},
      {"name":"Glass Animals","short":"glassa(1)","start":"2017-04-14 21:00","end":"2017-04-14 21:50","stage":"Outdoor Theatre"},
      {"name":"Empire Of The Sun","short":"empire(1)","start":"2017-04-14 22:15","end":"2017-04-14 23:05","mbId":"ac7e838c-3d95-47c2-92a9-81767ad7c217","stage":"Outdoor Theatre"},
      {"name":"The Atomics","short":"atomic(1)","start":"2017-04-15 13:10","end":"2017-04-15 13:55","stage":"Outdoor Theatre"},
      {"name":"Thundercat","short":"thunde(1)","start":"2017-04-15 14:20","end":"2017-04-15 15:10","stage":"Outdoor Theatre"},
      {"name":"Banks & Steelz","short":"bankss(1)","start":"2017-04-15 15:35","end":"2017-04-15 16:25","stage":"Outdoor Theatre"},
      {"name":"The Head & The Heart","short":"headhe(1)","start":"2017-04-15 16:50","end":"2017-04-15 17:40","stage":"Outdoor Theatre"},
      {"name":"Tycho","short":"tycho(1)","start":"2017-04-15 18:05","end":"2017-04-15 18:55","stage":"Outdoor Theatre"},
      {"name":"Bastille","short":"bastil(1)","start":"2017-04-15 19:20","end":"2017-04-15 20:10","stage":"Outdoor Theatre"},
      {"name":"Future","short":"future(1)","start":"2017-04-15 20:35","end":"2017-04-15 21:25","stage":"Outdoor Theatre"},
      {"name":"DJ Snake","short":"djsnak(1)","start":"2017-04-15 22:00","end":"2017-04-15 23:00","stage":"Outdoor Theatre"},
      {"name":"Caveman","short":"cavema(1)","start":"2017-04-16 12:55","end":"2017-04-16 13:25","stage":"Outdoor Theatre"},
      {"name":"Ezra Furman","short":"ezrafu(1)","start":"2017-04-16 13:50","end":"2017-04-16 14:40","stage":"Outdoor Theatre"},
      {"name":"Twin Peaks","short":"twinpe(1)","start":"2017-04-16 15:05","end":"2017-04-16 15:55","stage":"Outdoor Theatre"},
      {"name":"Tove Lo","short":"tove(1)","start":"2017-04-16 16:20","end":"2017-04-16 17:05","stage":"Outdoor Theatre"},
      {"name":"Hans Zimmer","short":"hanszi(1)","start":"2017-04-16 17:50","end":"2017-04-16 19:20","stage":"Outdoor Theatre"},
      {"name":"New Order","short":"neword(1)","start":"2017-04-16 20:05","end":"2017-04-16 21:05","stage":"Outdoor Theatre"},
      {"name":"Klangstof","short":"klangs(1)","start":"2017-04-14 13:50","end":"2017-04-14 14:20","stage":"Gobi"},
      {"name":"Zipper Club","short":"zipper(1)","start":"2017-04-14 14:40","end":"2017-04-14 15:10","stage":"Gobi"},
      {"name":"Joseph","short":"joseph(1)","start":"2017-04-14 15:35","end":"2017-04-14 16:15","stage":"Gobi"},
      {"name":"SOHN","short":"sohn(1)","start":"2017-04-14 16:40","end":"2017-04-14 17:25","stage":"Gobi"},
      {"name":"Raury","short":"raury(1)","start":"2017-04-14 17:50","end":"2017-04-14 18:35","mbId":"e6398ac3-f9b6-49c8-bd40-794888c7757a","stage":"Gobi"},
      {"name":"Francis + The Lights","short":"franci(1)","start":"2017-04-14 19:00","end":"2017-04-14 19:50","stage":"Gobi"},
      {"name":"Guided By Voices","short":"guided(1)","start":"2017-04-14 20:15","end":"2017-04-14 21:05","stage":"Gobi"},
      {"name":"Broods","short":"broods(1)","start":"2017-04-14 21:30","end":"2017-04-14 22:20","stage":"Gobi"},
      {"name":"Sampha","short":"sampha(1)","start":"2017-04-14 22:45","end":"2017-04-14 23:35","stage":"Gobi"},
      {"name":"BICEP","short":"bicep(1)","start":"2017-04-15 00:00","end":"2017-04-15 00:50","stage":"Gobi"},
      {"name":"Bishop Briggs","short":"bishop(1)","start":"2017-04-15 13:05","end":"2017-04-15 13:50","stage":"Gobi"},
      {"name":"Chicano Batman","short":"chican(1)","start":"2017-04-15 14:15","end":"2017-04-15 15:05","stage":"Gobi"},
      {"name":"Swet Shop Boys","short":"swetsh(1)","start":"2017-04-15 15:30","end":"2017-04-15 16:10","stage":"Gobi"},
      {"name":"Nav","short":"nav(1)","start":"2017-04-15 16:35","end":"2017-04-15 17:25","stage":"Gobi"},
      {"name":"Mitski","short":"mitski(1)","start":"2017-04-15 17:50","end":"2017-04-15 18:40","stage":"Gobi"},
      {"name":"DREAMCAR","short":"dreamc(1)","start":"2017-04-15 19:05","end":"2017-04-15 19:50","stage":"Gobi"},
      {"name":"Car Seat Headrest","short":"carsea(1)","start":"2017-04-15 20:15","end":"2017-04-15 21:05","stage":"Gobi"},
      {"name":"Floating Points","short":"floati(1)","start":"2017-04-15 21:30","end":"2017-04-15 22:20","stage":"Gobi"},
      {"name":"Breakbot","short":"breakb(1)","start":"2017-04-15 22:45","end":"2017-04-15 23:35","stage":"Gobi"},
      {"name":"Four Tet","short":"fourte(1)","start":"2017-04-16 00:00","end":"2017-04-16 01:00","stage":"Gobi"},
      {"name":"Grace Mitchell","short":"gracem(1)","start":"2017-04-16 13:40","end":"2017-04-16 14:20","stage":"Gobi"},
      {"name":"Pond","short":"pond(1)","start":"2017-04-16 14:45","end":"2017-04-16 15:35","stage":"Gobi"},
      {"name":"Show Me The Body","short":"showme(1)","start":"2017-04-16 16:00","end":"2017-04-16 16:25","stage":"Gobi"},
      {"name":"Lee Fields & The Expressions","short":"leefie(1)","start":"2017-04-16 16:45","end":"2017-04-16 17:35","stage":"Gobi"},
      {"name":"Toots & The Maytals","short":"tootsm(1)","start":"2017-04-16 18:00","end":"2017-04-16 18:50","stage":"Gobi"},
      {"name":"Jack Garratt","short":"jackga(1)","start":"2017-04-16 19:15","end":"2017-04-16 20:05","stage":"Gobi"},
      {"name":"PNL","short":"pnl(1)","start":"2017-04-16 20:30","end":"2017-04-16 21:20","stage":"Gobi"},
      {"name":"Preoccupations","short":"preocc(1)","start":"2017-04-16 21:45","end":"2017-04-16 22:35","stage":"Gobi"},
      {"name":"Devendra Banhart","short":"devend(1)","start":"2017-04-16 23:00","end":"2017-04-16 23:50"},
    ],
    mySchedule: [],

  };

export default function events(events = initialState, action = {}) {

  switch (action.type) {

    // case SET_TITLE:
    //   return {
    //   ...recommendations,
    //   unfinished: {title: action.title, id: uuid.v1()}
    //   }
    //
    // // -------------------------------------------
    // case SET_FRIEND:
    //   return {
    //     ...recommendations,
    //     unfinished: {
    //       ...recommendations.unfinished,
    //       friend: action.friend
    //     }
    //   }
    //
    // // -------------------------------------------
    // case SAVE_RECOMMENDATION:
    //   var newList = [recommendations.unfinished].concat(recommendations.list);
    //   return {
    //     ...recommendations,
    //     list: newList,
    //   }
    //
    // // -------------------------------------------
    // case SET_REMINDER:
    //
    //   var newList = _.map(recommendations.list, function(rec) {
    //     return rec.id === action.recId ? {...rec,reminder: true} : rec;
    //   });
    //
    //   return {
    //     ...recommendations,
    //     list: newList,
    //   }

    // -------------------------------------------
    default:
      return events;
  }
}
