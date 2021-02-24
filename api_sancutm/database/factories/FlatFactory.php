<?php

namespace Database\Factories;

use App\Models\Flat;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FlatFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Flat::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $users = User::all();

        return [
            'title' => $this->faker->address,
            'room'  => $this->faker->numberBetween(1, 10),
            'bed'   => $this->faker->numberBetween(1, 10),
            'wc'    => $this->faker->numberBetween(1, 3),
            'mq'    => $this->faker->numberBetween(35, 500),
            'image' => $this->faker->imageUrl(640, 480,'city'),
            'description' => $this->faker->realText(),
            'user_id' => $users->random()->id
        ];
    }
}
