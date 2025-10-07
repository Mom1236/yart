<Card className="group w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in bg-card border-border">
  <div className="relative overflow-hidden">
    <Image
      src={product.image || "/placeholder.svg"}
      alt={product.name}
      width={300}
      height={400}
      // ↓ dynamic height: ~45% of viewport width on phones, larger at breakpoints
      className="w-full h-[45vw] max-h-60 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 640px) 45vw, (max-width: 768px) 280px, 300px"
      priority={false}
    />
    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">{getStatusBadge()}</div>
  </div>

  <CardContent className="p-4 sm:p-6">
    <div className="mb-3 sm:mb-4">
      <h3 className="font-heading font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-balance">
        {product.name}
      </h3>
      <p className="text-muted-foreground text-xs sm:text-sm text-pretty line-clamp-2">
        {product.description}
      </p>
    </div>

    {/* Flavor Selection */}
    <div className="mb-3 sm:mb-4">
      <label className="text-xs sm:text-sm font-medium mb-2 block">Choose Flavor</label>
      <Select value={selectedFlavor} onValueChange={setSelectedFlavor}>
        <SelectTrigger className="w-full h-9 sm:h-10 text-xs sm:text-sm">
          <SelectValue placeholder="Select a flavor" />
        </SelectTrigger>
        <SelectContent>
          {product.flavors.map((flavor) => (
            <SelectItem key={flavor} value={flavor}>
              {flavor}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    {/* Pricing Options */}
    <div className="mb-5 sm:mb-6">
      <label className="text-xs sm:text-sm font-medium mb-2 block">Pricing</label>
      <div className="grid grid-cols-1 gap-2">
        {product.pricing.map((pricing) => (
          <button
            key={pricing.quantity}
            onClick={() => setSelectedPricing(pricing)}
            className={`p-2.5 sm:p-3 rounded-lg border text-left transition-colors ${
              selectedPricing.quantity === pricing.quantity
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/50"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm sm:text-base">{pricing.label}</span>
              {pricing.quantity > 1 && (
                <Badge variant="secondary" className="text-[10px] sm:text-xs">
                  Save ${pricing.quantity * product.basePrice - pricing.price}
                </Badge>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Add to Cart */}
    <Button
      onClick={handleAddToCart}
      disabled={product.status === "sold-out" || !selectedFlavor}
      className="w-full h-10 sm:h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base"
    >
      <ShoppingCart className="w-4 h-4 mr-2" />
      {product.status === "sold-out" ? "Sold Out" : `Add to Cart - $${selectedPricing.price}`}
    </Button>
  </CardContent>
</Card>
