import React from 'react';
import { Icon } from 'antd/lib/index';

const ChickenLeg = () => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
    viewBox="0 0 500.935 500.935"
  >
    <path
      d="M184.573,351.806c0.943,0.415,2.024,0.764,3.219,1.04c63.216,14.737,94.6,24.215,110.126,30.1
			c9.218,3.495,20.842,3.284,28.133-3.349l47.129-42.854c7.291-6.633,7.169-17.371,1.528-25.459
			c-19.078-27.353-23.183-65.386-23.817-87.472c-0.049-1.569-0.276-2.894-0.585-4.105c4.235-43.984-7.877-92.162-37.375-134.073
			C254.081,1.993,148.36-25.002,76.804,25.346S-5.042,184.317,53.817,267.968C87.242,315.463,135.769,344.629,184.573,351.806z
			 M189.312,40.018c76.929,25.288,106.899,91.511,123.668,165.571c5.788,25.572-33.912,34.278-39.7,8.722
			c-13.445-59.379-33.766-114.995-96.47-135.609C151.937,70.525,164.349,31.817,189.312,40.018z"
    />
    <path
      d="M433.072,359.163c-9.746,0.081-19.005,2.829-27.036,7.917l-16.298-16.038l-52.868,53.754
			l15.631,15.387c-5.877,8.592-9.047,18.769-8.966,29.344c0.236,28.58,23.679,51.641,52.259,51.405
			c24.012-0.195,42.195-20.899,47.731-43.366c22.898-5.519,42-22.467,41.797-46.999
			C485.095,381.988,461.652,358.927,433.072,359.163z M433.649,436.043l-15.298-3.699l2.024,16.972
			c-0.114,13.591-11.234,24.735-24.784,24.841c-13.819,0.114-25.15-11.039-25.264-24.849c-0.065-7.43,3.3-14.493,9.226-19.403
			l11.421-9.454l-16.233-15.965l15.314-15.582l15.688,15.436l9.372-10.218c4.796-5.227,11.258-8.137,18.184-8.194
			c13.81-0.114,25.15,11.039,25.264,24.849C458.669,424.606,447.524,435.929,433.649,436.043z"
    />
  </svg>
);

const ChickenLegIcon = props => <Icon component={ChickenLeg} {...props} />;
export default ChickenLegIcon;