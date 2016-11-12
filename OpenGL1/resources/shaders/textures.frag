#version 330 core
in vec2 TexCoord1;
in vec2 TexCoord2;

out vec4 color;

uniform sampler2D customTexture1;
uniform sampler2D customTexture2;

void main()
{
	color = mix(texture(customTexture1, TexCoord1), texture(customTexture2, TexCoord2), 0.15);  
}
