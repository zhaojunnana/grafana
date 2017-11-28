import { react2AngularDirective } from 'app/core/utils/react2angular';
import { PasswordStrength } from './components/PasswordStrength';
import { SearchResultList } from './components/search/SearchResultList';

export function registerAngularDirectives() {

  react2AngularDirective('passwordStrength', PasswordStrength, ['password']);
  react2AngularDirective('searchResultList', SearchResultList, [
    ['sections', {watchDepth: 'collection'}],
  ]);

}
