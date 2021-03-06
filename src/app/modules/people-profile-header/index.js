import React from 'react';

import Follow from '@components/follow';
import MoreMenu from '@components/more-menu';

// styles
import './index.scss';

export default class PeopleDetailHead extends React.PureComponent {

  render() {
    
    const { people } = this.props;
    
    return (
        <div styleName="header" className="rounded-top">
          
          <div styleName="profile">
            <div styleName="actions">
              <Follow user={people} className="btn btn-primary btn-sm mr-3" />
              <MoreMenu user={people} />
            </div>
            <img styleName="avatar" src={people.avatar_url.replace('thumbnail/!50', 'thumbnail/!300')} />
            <div styleName="nickname">
              {people.nickname}
              {Reflect.has(people, 'gender') && people.gender != null ?
                <span styleName={people.gender == 1 ? 'male' : 'female'}></span>
                : null}
            </div>
            <div>{people.brief}</div>
            <div>
              <small className="text-secondary mr-2">加入于 {people._create_at}</small>
            </div>
          </div>

        </div>
      )

  }

}