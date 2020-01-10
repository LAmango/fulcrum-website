import CMS from 'netlify-cms-app'
import "../assets/scss/main.scss"
import BlogPostPreview from './preview-templates/BlogPostPreview';

CMS.registerPreviewTemplate('blog', BlogPostPreview);