import columns from '../../assets/images/columns.jpg'
import cherryBlossom from '../../assets/images/cherryBlossom.jpg'
import theranchfields from '../../assets/images/theranchfields.jpg'
import parqueTyrona from '../../assets/images/parqueTyrona.jpg'

const homeData = [{
  title: 'About Me Now',
  img: columns,
  width: '50%',
  route: '/aboutMeNow'
},
{
  title: 'The Other Life',
  img: cherryBlossom,
  width: '50%',
  route: '/myFormerLife'
},
{
  title: 'My Code',
  img: parqueTyrona,
  width: '50%',
  route: '/myCode'
},
{
  title: 'Tech Community',
  img:  theranchfields,
  width: '50%',
  route: '/involvementInTechCommunity'
}
]

export default homeData;