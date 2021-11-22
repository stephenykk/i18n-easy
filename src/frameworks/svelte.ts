import { TextDocument } from 'vscode'
import { Framework } from './base'
import { LanguageId } from '~/utils'
import { Config } from '~/core'
import { extractionsParsers, DefaultExtractionRules, DefaultDynamicExtractionsRules } from '~/extraction'

class SvelteFramework extends Framework {
  id= 'svelte'
  display= 'Svelte'

  detection= {
    packageJSON: [
      'svelte-i18n',
    ],
  }

  languageIds: LanguageId[] = [
    'javascript',
    'typescript',
    'svelte',
  ]

  // for visualize the regex, you can use https://regexper.com/
  usageMatchRegex = [
    '\\$[_t]\\([\'"`]({key})[\'"`]',
  ]

  refactorTemplates(keypath: string) {
    return [
      `$_('${keypath}')`,
      `$t('${keypath}')`,
      `{ $t('${keypath}') }`,
      keypath,
    ]
  }

  supportAutoExtraction = ['svelte']

  detectHardStrings(doc: TextDocument) {
    const text = doc.getText()

    return extractionsParsers.html.detect(
      text,
      DefaultExtractionRules,
      DefaultDynamicExtractionsRules,
      Config.extractParserHTMLOptions,
      // <script>
      script => extractionsParsers.babel.detect(
        script,
        DefaultExtractionRules,
        DefaultDynamicExtractionsRules,
      ),
    )
  }
}

export default SvelteFramework
