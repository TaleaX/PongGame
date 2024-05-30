# Generated by Django 4.2.13 on 2024-05-29 18:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GameStats',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField(default=0)),
                ('win', models.IntegerField(default=0)),
                ('loss', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='GameUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('memory_multi_player', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='memory_multi_player', to='app.gamestats')),
                ('memory_single_player', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='memory_single_player', to='app.gamestats')),
                ('pong_multi_player', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pong_multi_player', to='app.gamestats')),
                ('pong_single_player', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pong_single_player', to='app.gamestats')),
            ],
        ),
    ]
