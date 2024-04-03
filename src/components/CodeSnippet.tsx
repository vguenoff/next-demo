import { Code } from 'bright'

import theme from './theme'

export default function CodeSnippet(props: any) {
  return <Code {...props} theme={theme} />
}
