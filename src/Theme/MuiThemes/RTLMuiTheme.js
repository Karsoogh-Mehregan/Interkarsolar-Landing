import { createMuiTheme } from '@material-ui/core';

import { SummerSchool } from '../MuiVariables';
import theme from '../theme';
import typography from '../typography';

const RTLMuiTheme = createMuiTheme({
  direction: 'rtl',
  ...theme(SummerSchool),
  typography
});

export default RTLMuiTheme;
