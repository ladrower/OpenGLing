#version 330 core
in vec3 customColor;
in vec2 TexCoord;

out vec4 color;

uniform sampler2D customTexture;

void main()
{
    color = texture(customTexture, TexCoord) * vec4(customColor, 1.0f);  
}
