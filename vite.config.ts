import { defineConfig } from "vite";
import postcssConfig from './postcss.config'
import uni from "@dcloudio/vite-plugin-uni";
import uvtw from '@uni-helper/vite-plugin-uni-tailwind'
import { resolve } from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@stores': resolve(__dirname, './src/stores'),
			'@pages': resolve(__dirname, './src/pages'),
		}
	},
	css: {
		postcss: postcssConfig,
	},
	plugins: [
		uni(),
		uvtw(),
		VitePWA({
			registerType: 'autoUpdate', // 如果此项值为autoUpdate，则为自动给更新
			manifest: {
				name: 'forInterView', // 项目名
				id: "applestven",
				short_name: 'InterView',
				description: 'build PWA',
				theme_color: '#DC143C', // 红 // 用于设置工具栏的颜色，并且可以反映在任务切换器中的应用预览中。theme_color 应与文档标头中指定的 meta 主题颜色一致。
				background_color: '#FFFF00', // 黄-首次在移动设备上启动应用时，启动画面会使用 background_color 属性。
				display: "minimal-ui", // 您可以自定义应用启动时显示的浏览器界面。例如，您可以隐藏地址栏和浏览器界面元素
				icons: [		//添加图标，注意路径和图像像素正确，sizes必须和图片的尺寸一致
					{
						src: './src/static/icon.png',
						sizes: '512x512', // 大于144
						type: 'image/png',
					},

				],
				screenshots: [ //
					{
						"src": "./src/static/icon.png",
						"type": "image/png",
						"sizes": "512x512",
						"form_factor": "narrow"
					},
					// {
					// 	"src": "./src/static/icon.png",
					// 	"type": "image/png",
					// 	"sizes": "720x540",
					// 	"form_factor": "wide"
					// }
				]
			},
			workbox: {
				// globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg}'],		// 缓存相关静态资源，这个放开会导致页面html被缓存，谨慎使用
			},
			devOptions: {
				enabled: true
			}
		})
	],
});