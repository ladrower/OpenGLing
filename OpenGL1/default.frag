#version 330 core
//in vec3 customColor;
in vec3 customPosition;

out vec4 color;

void main()
{
    color = vec4(customPosition, 1.0f);
}
