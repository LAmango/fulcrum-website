import CMS from 'netlify-cms-app'
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ClientPagePreview from './preview-templates/ClientPagePreview'

CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('clients', ClientPagePreview);