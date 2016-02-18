#version 330 core
in vec3 customColor;
in vec2 TexCoord;

out vec4 color;

uniform sampler2D customTexture1;
uniform sampler2D customTexture2;
uniform float mixFactor;

void main()
{
	color = mix(texture(customTexture1, TexCoord), texture(customTexture2, TexCoord), mixFactor) * vec4(customColor, 1.0f);  
}
