
import './css/app.scss';

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV development');
} else {
  console.log('NODE_ENV production');
}
