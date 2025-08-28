import defaultMdxComponents from 'fumadocs-ui/mdx'; // basic mdx tools
import type { MDXComponents } from 'mdx/types'; // ?
import { APIPage } from 'fumadocs-openapi/ui'; // api doc tools
import { openapi } from '@/lib/openapi'; // api data

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents, // gets standard components
    APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />, //displays interactive API documentation
    ...components, // for additional components
  };
}
